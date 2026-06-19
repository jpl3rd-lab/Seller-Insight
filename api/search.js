const MLSGRID_BASE_URL = "https://api-demo.mlsgrid.com/v2";

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

function esc(value = "") {
  return String(value).replace(/'/g, "''");
}

export default async function handler(req, res) {
  try {
    const apiKey = process.env.MLSGRID_API_KEY;

    if (!apiKey) {
      return json(res, 500, {
        error: "Missing MLSGRID_API_KEY",
      });
    }

    const city = req.query.city || "";
    const zip = req.query.zip || "";
    const status = req.query.status || "Active";
    const top = Math.min(Number(req.query.top) || 12, 50);

    const filters = /** @type {string[]} */ ([]);

    if (status) {
      filters.push("StandardStatus eq '" + esc(status) + "'");
    }

    if (city) {
      filters.push("City eq '" + esc(city) + "'");
    }

    if (zip) {
      filters.push("PostalCode eq '" + esc(zip) + "'");
    }

    const fields = [
      "ListingKey",
      "ListingId",
      "StandardStatus",
      "MlsStatus",
      "StreetNumber",
      "StreetName",
      "StreetSuffix",
      "City",
      "StateOrProvince",
      "PostalCode",
      "ListPrice",
      "ClosePrice",
      "BedroomsTotal",
      "BathroomsTotalInteger",
      "BathroomsTotal",
      "LivingArea",
      "BuildingAreaTotal",
      "DaysOnMarket",
      "CumulativeDaysOnMarket",
      "Latitude",
      "Longitude",
      "ModificationTimestamp",
      "PhotosCount",
      "MlgCanUse",
      "ListOfficeName",
      "ListOfficeMlsId",
    ];

    const params = new URLSearchParams();
    params.set("$top", String(top));
    params.set("$orderby", "ModificationTimestamp desc");
    params.set("$select", fields.join(","));

    if (filters.length > 0) {
      params.set("$filter", filters.join(" and "));
    }

    const url = MLSGRID_BASE_URL + "/Property?" + params.toString();

    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + apiKey,
        Accept: "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return json(res, response.status, {
        error: "MLS Grid request failed",
        details: data,
      });
    }

    const listings = (data.value || []).map((item) => {
      const address = [
        item.StreetNumber,
        item.StreetName,
        item.StreetSuffix,
        item.City,
        item.StateOrProvince,
        item.PostalCode,
      ]
        .filter(Boolean)
        .join(" ");

      return {
        listingKey: item.ListingKey,
        listingId: item.ListingId,
        status: item.StandardStatus || item.MlsStatus,
        address,
        city: item.City,
        state: item.StateOrProvince,
        zip: item.PostalCode,
        price: item.ListPrice || item.ClosePrice || 0,
        closePrice: item.ClosePrice || null,
        listPrice: item.ListPrice || null,
        beds: item.BedroomsTotal || null,
        baths: item.BathroomsTotalInteger || item.BathroomsTotal || null,
        sqft: item.LivingArea || item.BuildingAreaTotal || null,
        daysOnMarket:
          item.DaysOnMarket || item.CumulativeDaysOnMarket || null,
        latitude: item.Latitude,
        longitude: item.Longitude,
        modificationTimestamp: item.ModificationTimestamp,
        photosCount: item.PhotosCount,
        mlgCanUse: item.MlgCanUse,
        listingCourtesy:
          item.ListOfficeName ||
          item.ListOfficeMlsId ||
          "Listing courtesy of MLS Grid",
      };
    });

    return json(res, 200, {
      count: listings.length,
      listings,
      compliance: {
        source: "MLS Grid",
        endpoint: MLSGRID_BASE_URL,
        timestamp: new Date().toISOString(),
        disclaimer:
          "Listings courtesy of Northwest MLS as distributed by MLS GRID. Information should be independently verified.",
      },
    });
  } catch (error) {
    return json(res, 500, {
      error: "Unexpected MLS Grid integration error",
      message: error.message,
    });
  }
}
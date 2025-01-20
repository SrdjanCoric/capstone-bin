import { RequestData } from "../types";

// post /web
// creates a new bucket
// adds to local storage
export const createBucket = async (): Promise<string | null> => {
  try {
    const response = await fetch("http://localhost:3000/api/web", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const id: string = await response.json();

    try {
      const ids = localStorage.getItem("ids") ?? "[]";
      const existingIDs: string[] = JSON.parse(ids);
      const updatedIDs = [id, ...existingIDs];

      localStorage.setItem("ids", JSON.stringify(updatedIDs));

      return id;
    } catch (storageError) {
      console.error("Error updating localStorage:", storageError);
      return id;
    }
  } catch (error) {
    console.error("Error creating bucket:", error);
    return null;
  }
};

// gets all buckets ids from local storage
export const getAllBuckets = (): string[] => {
  const ids = localStorage.get("ids") ?? "[]";
  return JSON.parse(ids);
};

// get /web/id
// gets all data for a specific endpoint
export const getBucketData = async (id: string): Promise<RequestData[]> => {
  try {
    const response = await fetch(`http://localhost:3000/api/web/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(await response.json());
    return await response.json();
  } catch (error) {
    console.error("Error getting all bucket data:", error);
    // return null here?
    return [];
  }
};

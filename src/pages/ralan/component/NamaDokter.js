import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../config";

export const fetchNamaDokter = async () => {
  try {
    const response = await axios.get(`${API_URL}/ralan/poliklinik/dokter/nama`);
    const dataOptionDokter = response.data.map((item) => ({
      value: item.id,
      label: item.nama_dokter,
    }));
    return dataOptionDokter;
  } catch (error) {
    console.log(error);
    return [];
  }
};

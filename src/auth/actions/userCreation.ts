import { DataAuth } from "@/auth";
import bcrypt from "bcryptjs";

const getUser = async (email: string, password: string) => {
  if (!email || !password) return null;

  const response = await fetch(`http://localhost:8000/api/userAuth/${email}`);
  const dataArray: DataAuth[] = await response.json();
  const data: DataAuth = dataArray[0];

  if (!data.email) {
    return null;
  }

  if (data.email && data.password) {
    if (!bcrypt.compare(password, data.password)) {
      return null;
    }
    return data;
  }
};

export { getUser };

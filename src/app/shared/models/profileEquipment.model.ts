export interface IEquipment {
  id: number;
  name: string;
  lastServiceDate?: string;
  timeReminder?: string;
  userId?: string;
  parts?: IPart[];
}

export interface IPart {
  id: number;
  name: string;
  purchaseDate: string;
  expiryDate: string;
}

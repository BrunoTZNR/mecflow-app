import { Address } from "./Address.model"
import { Contact } from "./Contact.model"

export type People = {
  id?: number,
  fName: String,
  lName?: String,
  dtNasc?: String,
  contact?: Contact,
  address?: Address
}

export type Contact = {
  id: number,
  phone?: string,
  email?: string,
  whatsapp?: string
}

export type ContactCreate = Omit<Contact, 'id'>;

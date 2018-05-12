# Nebulas Notes 

The service allows you to create color notes.

### Smart Contract

- `total()` - Returns total count of notes.
- `add(date, text, color)` - Adds a new note.
- `update(id, text, color)` - Updates an existing note.
- `delete(id)` - Deletes the note.
- `get(limit, offset)` - Returns the specified number of notes.
- `getByWallet(wallet)` - Returns all notes of the user with the specified wallet.

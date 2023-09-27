import ItemList from "./item-list";

export default function Week3Page() {
  return (
    <main className="bg-black-100 p-4">
      <h1 className="text-white font-bold text-4xl mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
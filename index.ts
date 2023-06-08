import { HashTable } from "./hashtable";

const hashtable = new HashTable();

hashtable.set("valdir", "32");
hashtable.set("felipe", "31");
hashtable.set("lucas", "29");
hashtable.set("chico", "33");
hashtable.set("chico", "40");
hashtable.set("cristina", "61");
hashtable.set("alberto ma", "22");
hashtable.set("cristina", "18");
hashtable.delete("lucassss");

hashtable.debug();

console.log(hashtable.get("cristina"));
console.log(hashtable.keys());

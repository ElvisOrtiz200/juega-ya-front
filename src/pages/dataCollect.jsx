
"use client";
import Pie from "../components/Footer/footer";
import "../app/globals.css"
import Nav from "../components/inicio/nav";
import Autocomplete from "../components/places/apiPlace";
import AutoCompleteWithAxios from "../components/places/apiPlace";
import AutocompleteInput from "../components/places/apiPlace";


export default function Data(){
    return (
        <div>
      <Nav/>
      <Autocomplete/>
      <Pie/>
      </div>
    );
}
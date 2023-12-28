import { useState } from "react";
import {  SearchButton, SearchForm, SearchInput } from "./Searchbar.styled";
import { SlMagnifier } from "react-icons/sl";
import { Notify } from "notiflix";
import { paramsForNotify } from "components/Notify/Notify";


const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');

        // зміни в інпуті
        const onChangeInput = (event) => {
            setQuery(event.target.value.toLowerCase().trim())
        }; 
        
        const handleSubmit = e => {
            e.preventDefault();
            // const { textQuery } = this.state;
            // console.log(textQuery);
            // const { onSubmit } = this.props;

            // повідомлення
            if (!query) {
                Notify.info('Enter your request, please!', paramsForNotify);
                return;
            }
            //фун-я onSubmit прийшла з Movies через пропси
            onSearch(query);
    
            //очистка рядка пошука
            setQuery('');
        };

            return(
                <SearchForm onSubmit={handleSubmit}>
                    <SearchInput
                     value = {query}
                     onChange = {onChangeInput}
                     type="text"
                     name="query"
                     autoComplete="off"
                     autoFocus
                     placeholder="Enter the movie"
                   />
                   <SearchButton  type="submit">
                        <SlMagnifier />
                    </SearchButton>
                </SearchForm>
            )
        }

export default SearchBar;
import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.small ? 5 : undefined,
}))`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <form>
      <div className="flex">
        <label
          for="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Your Email
        </label>

        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-regularPurple focus:border-regularPurple focus:outline-none"
            placeholder="Search Coin"
            required
            value={filterText}
            onChange={onFilter}
          />
          <button
            type="submit"
            onClick={onClear}
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primaryButton rounded-r-lg border border-regularPurple hover:bg-regularPurple focus:ring-4 focus:outline-none "
            style={{background: 'radial-gradient(86.8% 325.5% at 8% 0%, #D446F1 0%, #9A35EB 100%)'}}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  </>
);

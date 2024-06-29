// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedValue;

    // Function to set a value
    function set(uint256 x) public {
        storedValue = x;
    }

    // Function to get the stored value
    function get() public view returns (uint256) {
        return storedValue;
    }

    // Function to increment the stored value
    function increment() public {
        storedValue += 1;
    }
}

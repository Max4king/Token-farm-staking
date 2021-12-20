// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

contract SimpleStorage {
    //initialize a favorite at zero
    uint256 favoriteNumber;

    struct People {
        string name;
        uint256 favoriteNumber;
    }

    People[] public people;
    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favornum) public returns (uint256) {
        favoriteNumber = _favornum;
        return (favoriteNumber);
    }

    function retrieve() public view returns (uint256) {
        return (favoriteNumber);
    }

    function addPerson(string memory new_name, uint256 favornum) public {
        people.push(People(new_name, favornum));
        nameToFavoriteNumber[new_name] = favornum;
    }
}

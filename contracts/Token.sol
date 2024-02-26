// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, ERC20Burnable, Ownable {
    constructor(
        string memory name,
        string memory symbol,
        uint256 amount, 
        address initAddress
    ) ERC20(name, symbol) Ownable(initAddress) {
        _mint(initAddress, amount * 10 ** decimals());
    }

}
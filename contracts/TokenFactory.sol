// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./Token.sol";

contract TokenFactory is Ownable(msg.sender) {
    using SafeERC20 for IERC20;
    using SafeERC20 for Token;



    uint256 public id;

    mapping(uint256 => Token) public TokenToId;

    constructor() {
        
    }

    function createToken(
        string memory name,
        string memory symbol,
        uint256 amount, 
        address initAddress
    ) external  {
   

        Token token = new Token(name, symbol, amount, initAddress);

        TokenToId[++id] = token;
    }

   }

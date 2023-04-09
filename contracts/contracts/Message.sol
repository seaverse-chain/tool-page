// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract Message {
    string public message = "initial";

    event SetMessage(address sender, string purpose);

    constructor() { }

    function setMessage(string memory _message) public {
        message = _message;
        emit SetMessage(msg.sender, _message);
    }
}

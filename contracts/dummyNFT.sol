// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract dummyNFT is ERC721{
	
	constructor() ERC721("dummyNFT", "dNFT") {
        for (uint256 i = 0; i < 10; i++) {
            _safeMint(msg.sender, i);
        }
    }
	
	function _baseURI() internal view virtual override returns (string memory) {
		return "ipfs://bafybeiay3gnmyzlvtmrez6nskuzwuh4v4fvzketlnqxcow4uqhxlwgreru/";
	}
 
}

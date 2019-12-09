function save_data(data) {
	const response = await fetch('http://example.com/movies.json');
	const myJson = await response.json();
	console.log(JSON.stringify(myJson));

// 	PUT /Key+ HTTP/1.1
// Host: Bucket.s3.amazonaws.com
// x-amz-acl: ACL
// Cache-Control: CacheControl
// Content-Disposition: ContentDisposition
// Content-Encoding: ContentEncoding
// Content-Language: ContentLanguage
// Content-Length: ContentLength
// Content-MD5: ContentMD5
// Content-Type: ContentType
// Expires: Expires
// x-amz-grant-full-control: GrantFullControl
// x-amz-grant-read: GrantRead
// x-amz-grant-read-acp: GrantReadACP
// x-amz-grant-write-acp: GrantWriteACP
// x-amz-server-side-encryption: ServerSideEncryption
// x-amz-storage-class: StorageClass
// x-amz-website-redirect-location: WebsiteRedirectLocation
// x-amz-server-side-encryption-customer-algorithm: SSECustomerAlgorithm
// x-amz-server-side-encryption-customer-key: SSECustomerKey
// x-amz-server-side-encryption-customer-key-MD5: SSECustomerKeyMD5
// x-amz-server-side-encryption-aws-kms-key-id: SSEKMSKeyId
// x-amz-server-side-encryption-context: SSEKMSEncryptionContext
// x-amz-request-payer: RequestPayer
// x-amz-tagging: Tagging
// x-amz-object-lock-mode: ObjectLockMode
// x-amz-object-lock-retain-until-date: ObjectLockRetainUntilDate
// x-amz-object-lock-legal-hold: ObjectLockLegalHoldStatus

// Body
}

function save_data_2(data) {
	const url = 'https://s3-ap-southeast-2.amazonaws.com/org.nbi/dave/image_160.jpg';

	try {
	  const response = await fetch(url, {
	    method: 'POST', // or 'PUT'
	    body: JSON.stringify(data), // data can be `string` or {object}!
	    headers: {
	      'Content-Type': 'application/json'
	    }
	  });
	  const json = await response.json();
	  console.log('Success:', JSON.stringify(json));
	} catch (error) {
	  console.error('Error:', error);
	}
}


document.getElementById('put_date_here').innerHTML = new Date().toDateString();

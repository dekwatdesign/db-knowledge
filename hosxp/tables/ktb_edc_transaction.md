# `ktb_edc_transaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ktb_edc_transaction_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| approval_code | varchar(15) | YES | MUL | NULL |  |  |
| response_message | varchar(50) | YES |  | NULL |  |  |
| invoice_number | varchar(25) | YES |  | NULL |  |  |
| terminal_id | varchar(20) | YES |  | NULL |  |  |
| merchant_id | varchar(20) | YES |  | NULL |  |  |
| transaction_date | varchar(6) | YES |  | NULL |  |  |
| transaction_time | varchar(6) | YES |  | NULL |  |  |
| card_no | varchar(25) | YES |  | NULL |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| edc_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_app_code | approval_code | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | ktb_edc_transaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ktb_edc_transaction_id": 1,
    "hn": "530043241",
    "approval_code": "012781714",
    "response_message": "APPROVED",
    "invoice_number": "001311",
    "terminal_id": "40002977",
    "merchant_id": "000000040001029",
    "transaction_date": "180914",
    "transaction_time": "095855",
    "card_no": "000110xxxxxx1671",
    "computer_name": "FINANCE1-YUWA",
    "staff": "[MASKED_FULLNAME]",
    "vn": "610914083010",
    "amount": 850.0,
    "edc_code": null
  },
  {
    "ktb_edc_transaction_id": 2,
    "hn": "530107649",
    "approval_code": "012796797",
    "response_message": "APPROVED",
    "invoice_number": "001312",
    "terminal_id": "40002977",
    "merchant_id": "000000040001029",
    "transaction_date": "180914",
    "transaction_time": "104606",
    "card_no": "000110xxxxxx5331",
    "computer_name": "FINANCE1-YUWA",
    "staff": "[MASKED_FULLNAME]",
    "vn": "610914100409",
    "amount": 1048.0,
    "edc_code": null
  },
  {
    "ktb_edc_transaction_id": 3,
    "hn": "610000486",
    "approval_code": "012797481",
    "response_message": "APPROVED",
    "invoice_number": "001313",
    "terminal_id": "40002977",
    "merchant_id": "000000040001029",
    "transaction_date": "180914",
    "transaction_time": "104814",
    "card_no": "000311xxxxxx6177",
    "computer_name": "FINANCE1-YUWA",
    "staff": "[MASKED_FULLNAME]",
    "vn": "610914110002",
    "amount": 200.0,
    "edc_code": null
  },
  {
    "ktb_edc_transaction_id": 4,
    "hn": "590000193",
    "approval_code": "012824768",
    "response_message": "APPROVED",
    "invoice_number": "001317",
    "terminal_id": "40002977",
    "merchant_id": "000000040001029",
    "transaction_date": "180914",
    "transaction_time": "125734",
    "card_no": "000120xxxxxx0185",
    "computer_name": "FINANCE1-YUWA",
    "staff": "[MASKED_FULLNAME]",
    "vn": "610914110018",
    "amount": 2765.0,
    "edc_code": null
  },
  {
    "ktb_edc_transaction_id": 5,
    "hn": "590000193",
    "approval_code": "012825360",
    "response_message": "APPROVED",
    "invoice_number": "001318",
    "terminal_id": "40002977",
    "merchant_id": "000000040001029",
    "transaction_date": "180914",
    "transaction_time": "130307",
    "card_no": "000120xxxxxx0185",
    "computer_name": "FINANCE1-YUWA",
    "staff": "[MASKED_FULLNAME]",
    "vn": "610914110018",
    "amount": 2765.0,
    "edc_code": null
  },
  {
    "ktb_edc_transaction_id": 6,
    "hn": "530192053",
    "approval_code": "012841120",
    "response_message": "APPROVED",
    "invoice_number": "001319",
    "terminal_id": "40002977",
    "merchant_id": "000000040001029",
    "transaction_date": "180914",
    "transaction_time": "144057",
    "card_no": "000110xxxxxx5655",
    "computer_name": "FINANCE1-YUWA",
    "staff": "[MASKED_FULLNAME]",
    "vn": "610914135518",
    "amount": 674.0,
    "edc_code": null
  },
  {
    "ktb_edc_transaction_id": 7,
    "hn": "610001342",
    "approval_code": "012850193",
    "response_message": "APPROVED",
    "invoice_number": "001320",
    "terminal_id": "40002977",
    "merchant_id": "000000040001029",
    "transaction_date": "180914",
    "transaction_time": "153812",
    "card_no": "000130xxxxxx3907",
    "computer_name": "FINANCE1-YUWA",
    "staff": "[MASKED_FULLNAME]",
    "vn": "610914090016",
    "amount": 750.0,
    "edc_code": null
  },
  {
    "ktb_edc_transaction_id": 8,
    "hn": "580001560",
    "approval_code": "012961103",
    "response_message": "APPROVED",
    "invoice_number": "001321",
    "terminal_id": "40002977",
    "merchant_id": "000000040001029",
    "transaction_date": "180917",
    "transaction_time": "083741",
    "card_no": "000110xxxxxx9216",
    "computer_name": "FINANCE1-YUWA",
    "staff": "[MASKED_FULLNAME]",
    "vn": "610917083032",
    "amount": 550.0,
    "edc_code": null
  }
]
```

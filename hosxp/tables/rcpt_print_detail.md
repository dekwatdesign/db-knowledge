# `rcpt_print_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| finance_number | varchar(7) | NO | PRI |  |  |  |
| rcpno | varchar(20) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| income | char(2) | NO | PRI |  |  |  |
| paidst | char(2) | NO | PRI |  |  |  |
| rcptamt | double(15,3) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| special_discount | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| finance_number | finance_number | no | 1 |
| income | income | no | 1 |
| ix_fn_income | finance_number | no | 1 |
| ix_fn_income | income | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | finance_number | yes | 1 |
| PRIMARY | income | yes | 2 |
| PRIMARY | paidst | yes | 3 |
| rcpno | rcpno | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "finance_number": "0143790",
    "rcpno": "0000:4",
    "vn": "541006083401",
    "income": "12",
    "paidst": "01",
    "rcptamt": 0.0,
    "discount": 0.0,
    "total_amount": 0.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "finance_number": "0143791",
    "rcpno": "0000:5",
    "vn": "541006132700",
    "income": "07",
    "paidst": "01",
    "rcptamt": 0.0,
    "discount": 0.0,
    "total_amount": 0.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "finance_number": "0143791",
    "rcpno": "0000:5",
    "vn": "541006132700",
    "income": "12",
    "paidst": "01",
    "rcptamt": 0.0,
    "discount": 0.0,
    "total_amount": 0.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "finance_number": "0143792",
    "rcpno": "0000:6",
    "vn": "541006132700",
    "income": "07",
    "paidst": "01",
    "rcptamt": 0.0,
    "discount": 0.0,
    "total_amount": 0.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "finance_number": "0143792",
    "rcpno": "0000:6",
    "vn": "541006132700",
    "income": "07",
    "paidst": "03",
    "rcptamt": 0.0,
    "discount": 0.0,
    "total_amount": 0.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "finance_number": "0143792",
    "rcpno": "0000:6",
    "vn": "541006132700",
    "income": "12",
    "paidst": "01",
    "rcptamt": 0.0,
    "discount": 0.0,
    "total_amount": 0.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "finance_number": "0143793",
    "rcpno": "0000:7",
    "vn": "541006132700",
    "income": "07",
    "paidst": "01",
    "rcptamt": 0.0,
    "discount": 0.0,
    "total_amount": 0.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "finance_number": "0143793",
    "rcpno": "0000:7",
    "vn": "541006132700",
    "income": "07",
    "paidst": "03",
    "rcptamt": 0.0,
    "discount": 0.0,
    "total_amount": 0.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  }
]
```

# `rcpt_debt_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| debt_id | int(11) | NO | PRI | 0 |  |  |
| income | char(2) | NO | PRI |  |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| special_discount | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_debt_id | debt_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_income | income | no | 1 |
| PRIMARY | debt_id | yes | 1 |
| PRIMARY | income | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "debt_id": 1,
    "income": "03",
    "amount": 15600.0,
    "discount": 0.0,
    "total_amount": 15600.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "debt_id": 1,
    "income": "12",
    "amount": 50.0,
    "discount": 0.0,
    "total_amount": 50.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "debt_id": 1,
    "income": "17",
    "amount": 5700.0,
    "discount": 0.0,
    "total_amount": 5700.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "debt_id": 2,
    "income": "03",
    "amount": 3510.0,
    "discount": 0.0,
    "total_amount": 3510.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "debt_id": 2,
    "income": "12",
    "amount": 50.0,
    "discount": 0.0,
    "total_amount": 50.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "debt_id": 3,
    "income": "12",
    "amount": 50.0,
    "discount": 0.0,
    "total_amount": 50.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "debt_id": 4,
    "income": "09",
    "amount": 700.0,
    "discount": 0.0,
    "total_amount": 700.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  },
  {
    "debt_id": 4,
    "income": "12",
    "amount": 200.0,
    "discount": 0.0,
    "total_amount": 200.0,
    "hos_guid": null,
    "hos_guid_ext": null,
    "special_discount": null
  }
]
```

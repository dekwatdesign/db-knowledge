# `rcpt_arrear_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| arrear_id | int(11) | NO | PRI | 0 |  |  |
| income | char(2) | NO | PRI |  |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_arrear_id | arrear_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | arrear_id | yes | 1 |
| PRIMARY | income | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "arrear_id": 3,
    "income": "12",
    "amount": 150.0,
    "paidst": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "arrear_id": 6,
    "income": "09",
    "amount": 500.0,
    "paidst": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "arrear_id": 7,
    "income": "07",
    "amount": 250.0,
    "paidst": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "arrear_id": 8,
    "income": "12",
    "amount": 50.0,
    "paidst": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "arrear_id": 10,
    "income": "03",
    "amount": 1090.0,
    "paidst": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "arrear_id": 10,
    "income": "12",
    "amount": 50.0,
    "paidst": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "arrear_id": 13,
    "income": "16",
    "amount": 20.0,
    "paidst": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "arrear_id": 14,
    "income": "16",
    "amount": 20.0,
    "paidst": "",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

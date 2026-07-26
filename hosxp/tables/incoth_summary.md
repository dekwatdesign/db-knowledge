# `incoth_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| income | char(2) | NO | PRI |  |  |  |
| paidst | char(2) | NO | PRI |  |  |  |
| rcptamt | double(22,3) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| tot_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| income | income | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | income | yes | 2 |
| PRIMARY | paidst | yes | 3 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "vn": "681117121241",
    "income": "03",
    "paidst": "02",
    "rcptamt": 1381.0,
    "pttype": null,
    "discount": null,
    "tot_amount": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "681117121241",
    "income": "12",
    "paidst": "02",
    "rcptamt": 50.0,
    "pttype": null,
    "discount": null,
    "tot_amount": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "681117121241",
    "income": "14",
    "paidst": "02",
    "rcptamt": 450.0,
    "pttype": null,
    "discount": null,
    "tot_amount": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "681223080328",
    "income": "07",
    "paidst": "02",
    "rcptamt": 1990.0,
    "pttype": null,
    "discount": null,
    "tot_amount": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "681223080328",
    "income": "12",
    "paidst": "02",
    "rcptamt": 50.0,
    "pttype": null,
    "discount": null,
    "tot_amount": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

# `incoth`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| billdate | date | YES | MUL | NULL |  |  |
| billtime | time | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| incdate | date | YES | MUL | NULL |  |  |
| inctime | time | YES | MUL | NULL |  |  |
| income | char(2) | NO | PRI |  |  |  |
| paidst | char(2) | NO | PRI |  |  |  |
| rcpno | varchar(20) | YES | MUL | NULL |  |  |
| rcptamt | double(22,3) | YES |  | NULL |  |  |
| user | varchar(15) | YES | MUL | NULL |  |  |
| computer | varchar(15) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| porder | int(11) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| verify | char(1) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| billdate | billdate | no | 1 |
| billdate_billtime | billdate | no | 1 |
| billdate_billtime | billtime | no | 2 |
| finance_number | finance_number | no | 1 |
| hn | hn | no | 1 |
| incdate | incdate | no | 1 |
| income | income | no | 1 |
| income_paidst_vn | income | no | 1 |
| income_paidst_vn | paidst | no | 2 |
| income_paidst_vn | vn | no | 3 |
| inctime | inctime | no | 1 |
| inctime_incdate | inctime | no | 1 |
| inctime_incdate | incdate | no | 2 |
| inctime_incdate | hn | no | 3 |
| inctime_incdate | paidst | no | 4 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_inctime_incdate | hn | no | 1 |
| ix_inctime_incdate | incdate | no | 2 |
| ix_inctime_incdate | inctime | no | 3 |
| ix_inctime_incdate | paidst | no | 4 |
| ix_vn_paidst | vn | no | 1 |
| ix_vn_paidst | paidst | no | 2 |
| ix_vn_paidst_index | paidst | no | 1 |
| ix_vn_paidst_index | vn | no | 2 |
| paidst | paidst | no | 1 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | income | yes | 2 |
| PRIMARY | paidst | yes | 3 |
| rcpno | rcpno | no | 1 |
| user | user | no | 1 |
| verify | verify | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "250101153511",
    "billdate": "1982-01-01",
    "billtime": "15:35:11",
    "hn": "570002047",
    "incdate": "1982-01-01",
    "inctime": "15:35:11",
    "income": "12",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 50.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "discount": null,
    "verify": "N",
    "pttype": "74",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "250101153511",
    "billdate": "1982-01-01",
    "billtime": "15:35:11",
    "hn": "570002047",
    "incdate": "1982-01-01",
    "inctime": "15:35:11",
    "income": "16",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 20.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "discount": null,
    "verify": "N",
    "pttype": "74",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "250109164252",
    "billdate": "1982-01-09",
    "billtime": "16:42:52",
    "hn": "530122152",
    "incdate": "1982-01-09",
    "inctime": "16:42:52",
    "income": "12",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 50.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "discount": null,
    "verify": "N",
    "pttype": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "250109164252",
    "billdate": "1982-01-09",
    "billtime": "16:42:52",
    "hn": "530122152",
    "incdate": "1982-01-09",
    "inctime": "16:42:52",
    "income": "16",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 20.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "discount": null,
    "verify": "N",
    "pttype": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "250112144831",
    "billdate": "1982-01-12",
    "billtime": "14:48:31",
    "hn": "600000969",
    "incdate": "1982-01-12",
    "inctime": "14:48:31",
    "income": "12",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 50.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "discount": null,
    "verify": "N",
    "pttype": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "250119130001",
    "billdate": "1982-01-19",
    "billtime": "13:00:01",
    "hn": "530107252",
    "incdate": "1982-01-19",
    "inctime": "13:00:01",
    "income": "12",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 50.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "discount": null,
    "verify": "N",
    "pttype": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "250119130001",
    "billdate": "1982-01-19",
    "billtime": "13:00:01",
    "hn": "530107252",
    "incdate": "1982-01-19",
    "inctime": "13:00:01",
    "income": "16",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 20.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "discount": null,
    "verify": "N",
    "pttype": "11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "250201113358",
    "billdate": "1982-02-01",
    "billtime": "11:33:58",
    "hn": "560000577",
    "incdate": "1982-02-01",
    "inctime": "11:33:58",
    "income": "12",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 50.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "discount": null,
    "verify": "N",
    "pttype": "02",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

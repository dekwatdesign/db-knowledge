# `incith`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| billdate | date | YES | MUL | NULL |  |  |
| billtime | time | YES |  | NULL |  |  |
| incdate | date | YES | MUL | NULL |  |  |
| inctime | time | YES | MUL | NULL |  |  |
| income | char(2) | NO | PRI |  |  |  |
| paidst | char(2) | NO | PRI |  |  |  |
| rcpno | varchar(20) | YES |  | NULL |  |  |
| rcptamt | double(22,3) | YES | MUL | NULL |  |  |
| user | varchar(15) | YES |  | NULL |  |  |
| computer | varchar(15) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| porder | int(11) | YES |  | NULL |  |  |
| verify | char(1) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| billdate | billdate | no | 1 |
| finance_number | finance_number | no | 1 |
| incdate | incdate | no | 1 |
| income | income | no | 1 |
| income_an_rcpno | income | no | 1 |
| income_an_rcpno | an | no | 2 |
| income_an_rcpno | rcpno | no | 3 |
| income_an_rcpno | paidst | no | 4 |
| inctime | inctime | no | 1 |
| ix_an_paidst | an | no | 1 |
| ix_an_paidst | paidst | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_income_an_rcpno | an | no | 1 |
| ix_income_an_rcpno | income | no | 2 |
| ix_income_an_rcpno | paidst | no | 3 |
| ix_income_an_rcpno | rcpno | no | 4 |
| ix_rcptamt_an | an | no | 1 |
| ix_rcptamt_an | rcptamt | no | 2 |
| PRIMARY | an | yes | 1 |
| PRIMARY | income | yes | 2 |
| PRIMARY | paidst | yes | 3 |
| rcptamt_an | rcptamt | no | 1 |
| rcptamt_an | an | no | 2 |
| verify | verify | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "540000786",
    "billdate": "2011-10-10",
    "billtime": "8:00:00",
    "incdate": "2011-10-10",
    "inctime": "8:00:00",
    "income": "01",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 1500.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "verify": "N",
    "pttype": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000786",
    "billdate": "2011-10-10",
    "billtime": "8:00:00",
    "incdate": "2011-10-10",
    "inctime": "8:00:00",
    "income": "09",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 150.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "verify": "N",
    "pttype": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000786",
    "billdate": "2011-10-10",
    "billtime": "8:00:00",
    "incdate": "2011-10-10",
    "inctime": "8:00:00",
    "income": "12",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 1500.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "verify": "N",
    "pttype": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000786",
    "billdate": "2011-10-10",
    "billtime": "8:00:00",
    "incdate": "2011-10-10",
    "inctime": "8:00:00",
    "income": "14",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 1950.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "verify": "N",
    "pttype": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000787",
    "billdate": "2011-10-10",
    "billtime": "8:00:00",
    "incdate": "2011-10-10",
    "inctime": "8:00:00",
    "income": "01",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 1800.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "verify": "N",
    "pttype": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000787",
    "billdate": "2011-10-10",
    "billtime": "8:00:00",
    "incdate": "2011-10-10",
    "inctime": "8:00:00",
    "income": "09",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 650.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "verify": "N",
    "pttype": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000787",
    "billdate": "2011-10-10",
    "billtime": "8:00:00",
    "incdate": "2011-10-10",
    "inctime": "8:00:00",
    "income": "12",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 1800.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "verify": "N",
    "pttype": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000787",
    "billdate": "2011-10-10",
    "billtime": "8:00:00",
    "incdate": "2011-10-10",
    "inctime": "8:00:00",
    "income": "14",
    "paidst": "02",
    "rcpno": null,
    "rcptamt": 1050.0,
    "user": null,
    "computer": null,
    "finance_number": null,
    "porder": null,
    "verify": "N",
    "pttype": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

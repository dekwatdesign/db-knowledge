# `ipt_finance_opi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_finance_opi_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | UNI | NULL |  |  |
| cash_check | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | yes | 1 |
| PRIMARY | ipt_finance_opi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_finance_opi_id": 1,
    "an": "630000255",
    "hos_guid": "{61AF6F48-56A3-43D2-B4B4-C7B082D1509F}",
    "cash_check": "Y"
  },
  {
    "ipt_finance_opi_id": 2,
    "an": "630000255",
    "hos_guid": "{5C8088E7-723A-4D1F-906F-610E08AB16D9}",
    "cash_check": ""
  },
  {
    "ipt_finance_opi_id": 3,
    "an": "630000255",
    "hos_guid": "{C4AA0270-DEC2-496E-8F7E-5919288476CD}",
    "cash_check": ""
  },
  {
    "ipt_finance_opi_id": 4,
    "an": "630000255",
    "hos_guid": "{B19BC804-BF21-4119-B600-2F50329568D0}",
    "cash_check": ""
  },
  {
    "ipt_finance_opi_id": 5,
    "an": "630000255",
    "hos_guid": "{FA7C2B80-F7F8-48EB-8A65-560276FA6C14}",
    "cash_check": ""
  },
  {
    "ipt_finance_opi_id": 6,
    "an": "630000255",
    "hos_guid": "{BCB909EA-764C-45DC-871C-50174867ACEC}",
    "cash_check": ""
  },
  {
    "ipt_finance_opi_id": 7,
    "an": "630000255",
    "hos_guid": "{75F50C8F-089B-4C95-B913-36E875D059F7}",
    "cash_check": ""
  },
  {
    "ipt_finance_opi_id": 8,
    "an": "630000255",
    "hos_guid": "{646B5545-77A8-4DAB-ABE4-F6754ACC6B5E}",
    "cash_check": ""
  }
]
```

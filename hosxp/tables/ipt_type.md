# `ipt_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_type | int(11) | NO | PRI | 0 |  |  |
| ipt_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| is_ambulatory | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ipt_type_name | ipt_type_name | yes | 1 |
| PRIMARY | ipt_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ipt_type": 1,
    "ipt_type_name": "ปกติ",
    "hos_guid": "{B448585A-E5D9-11DF-BBCF-F3CA1C2D0000}",
    "is_ambulatory": null
  },
  {
    "ipt_type": 2,
    "ipt_type_name": "อุบัติเหตุ / ฉุกเฉิน",
    "hos_guid": "{B4485FB6-E5D9-11DF-BBCF-F3CA1C2D0000}",
    "is_ambulatory": null
  },
  {
    "ipt_type": 3,
    "ipt_type_name": "แรกเกิด",
    "hos_guid": "{B44864D3-E5D9-11DF-BBCF-F3CA1C2D0000}",
    "is_ambulatory": null
  },
  {
    "ipt_type": 4,
    "ipt_type_name": "คลอดบุตร",
    "hos_guid": "{B44869A3-E5D9-11DF-BBCF-F3CA1C2D0000}",
    "is_ambulatory": null
  }
]
```

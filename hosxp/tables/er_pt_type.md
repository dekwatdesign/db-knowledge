# `er_pt_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_pt_type | tinyint(4) | NO | PRI | 0 |  |  |
| name | varchar(50) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| accident_code | char(1) | YES |  | NULL |  |  |
| ucae | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| name | name | no | 1 |
| PRIMARY | er_pt_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "er_pt_type": 1,
    "name": "ผู้ป่วยฉุกเฉิน",
    "hos_guid": null,
    "hos_guid_ext": null,
    "accident_code": null,
    "ucae": "E"
  },
  {
    "er_pt_type": 2,
    "name": "ผู้ป่วยอุบัติเหตุ",
    "hos_guid": null,
    "hos_guid_ext": null,
    "accident_code": null,
    "ucae": "A"
  },
  {
    "er_pt_type": 3,
    "name": "ผู้ป่วยตรวจโรคทั่วไป",
    "hos_guid": null,
    "hos_guid_ext": null,
    "accident_code": null,
    "ucae": null
  },
  {
    "er_pt_type": 4,
    "name": "ผู้ป่วยรับบริการอื่น ๆ",
    "hos_guid": null,
    "hos_guid_ext": null,
    "accident_code": null,
    "ucae": null
  }
]
```

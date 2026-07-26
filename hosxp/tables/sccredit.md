# `sccredit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| credittype | char(1) | YES | UNI | NULL |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| gtfactor | double(22,3) | YES |  | NULL |  |  |
| loanfactor | double(22,3) | YES |  | NULL |  |  |
| maxgtfactor | double(22,3) | YES |  | NULL |  |  |
| maxloanfactor | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| credittype_unique | credittype | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "credittype": "A",
    "name": "ทั่วไป",
    "gtfactor": 5.0,
    "loanfactor": 5.0,
    "maxgtfactor": 5.0,
    "maxloanfactor": 5.0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "credittype": "Z",
    "name": "เงินหมุนเวียน",
    "gtfactor": 1.0,
    "loanfactor": 1.0,
    "maxgtfactor": 1.0,
    "maxloanfactor": 1.0,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

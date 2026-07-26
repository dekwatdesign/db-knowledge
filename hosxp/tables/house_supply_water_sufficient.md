# `house_supply_water_sufficient`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_supply_water_sufficient_id | int(11) | NO | PRI | 0 |  |  |
| house_supply_water_sufficient_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_supply_water_sufficient_name | house_supply_water_sufficient_name | yes | 1 |
| PRIMARY | house_supply_water_sufficient_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "house_supply_water_sufficient_id": 0,
    "house_supply_water_sufficient_name": "00 ไม่เพียงพอ",
    "hos_guid": "{A156BF62-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_supply_water_sufficient_id": 1,
    "house_supply_water_sufficient_name": "01 เพียงพอ (5 ลิตร/คน/วัน)",
    "hos_guid": "{A156C142-F542-11DE-BFF4-00215E472B30}"
  }
]
```

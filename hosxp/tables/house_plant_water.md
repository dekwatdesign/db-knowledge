# `house_plant_water`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_plant_water_id | int(11) | NO | PRI | 0 |  |  |
| house_plant_water_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_plant_water_name | house_plant_water_name | yes | 1 |
| PRIMARY | house_plant_water_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "house_plant_water_id": 1,
    "house_plant_water_name": "01 น้ำฝน",
    "hos_guid": "{9EFC8B7A-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_water_id": 2,
    "house_plant_water_name": "02 บ่อบาดาล",
    "hos_guid": "{9EFC8DB4-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_water_id": 3,
    "house_plant_water_name": "03 คลองชลประทาน",
    "hos_guid": "{9EFC8EB8-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_water_id": 4,
    "house_plant_water_name": "04 แม่น้ำ/ลำคลองธรรมชาติ",
    "hos_guid": "{9EFC8FB2-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_water_id": 5,
    "house_plant_water_name": "05 ฝาย",
    "hos_guid": "{9EFC90A2-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_water_id": 6,
    "house_plant_water_name": "06 อ่างเก็บน้ำ\t",
    "hos_guid": "{9EFC919C-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_water_id": 7,
    "house_plant_water_name": "07 สระ, หนอง, บึง",
    "hos_guid": "{9EFC928C-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_water_id": 9,
    "house_plant_water_name": "09 ไม่ทราบ",
    "hos_guid": "{9EFC937C-F542-11DE-BFF4-00215E472B30}"
  }
]
```

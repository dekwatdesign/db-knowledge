# `house_drink_water`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_drink_water_id | int(11) | NO | PRI | 0 |  |  |
| house_drink_water_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_drink_water_name | house_drink_water_name | yes | 1 |
| PRIMARY | house_drink_water_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "house_drink_water_id": 1,
    "house_drink_water_name": "01น้ำดื่มบรรจุขวด",
    "hos_guid": "{94DC2718-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_drink_water_id": 2,
    "house_drink_water_name": "02 น้ำฝน",
    "hos_guid": "{94DC290C-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_drink_water_id": 3,
    "house_drink_water_name": "03 น้ำประปา",
    "hos_guid": "{94DC2A10-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_drink_water_id": 4,
    "house_drink_water_name": "04 น้ำจากบ่อบาดาลที่ถูกหลักสุขาภิบาล",
    "hos_guid": "{94DC2B0A-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_drink_water_id": 5,
    "house_drink_water_name": "05 น้ำกรอง",
    "hos_guid": "{94DC2BFA-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_drink_water_id": 6,
    "house_drink_water_name": "06 น้ำต้ม",
    "hos_guid": "{94DC2CEA-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_drink_water_id": 7,
    "house_drink_water_name": "07 อื่นๆ",
    "hos_guid": "{94DC2DE4-F542-11DE-BFF4-00215E472B30}"
  }
]
```

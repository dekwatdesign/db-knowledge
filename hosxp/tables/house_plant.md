# `house_plant`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_plant_id | int(11) | NO | PRI | 0 |  |  |
| house_plant_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_plant_name | house_plant_name | yes | 1 |
| PRIMARY | house_plant_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "house_plant_id": 1,
    "house_plant_name": "01 ข้าวหอมมะลิ",
    "hos_guid": "{9D9C25B0-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_id": 2,
    "house_plant_name": "02 ข้าวหอมปทุม",
    "hos_guid": "{9D9C27E0-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_id": 3,
    "house_plant_name": "03 ข้าวพันธุ์ชัยนาท",
    "hos_guid": "{9D9C28E4-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_id": 4,
    "house_plant_name": "04 ข้าวพันธุ์สุพรรณ",
    "hos_guid": "{9D9C29DE-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_id": 5,
    "house_plant_name": "05 ข้าวพันธุ์อื่นๆ",
    "hos_guid": "{9D9C2AD8-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_id": 6,
    "house_plant_name": "06 มะม่วงเขียวเสวย",
    "hos_guid": "{9D9C2BC8-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_id": 7,
    "house_plant_name": "07 มะม่วงน้ำดอกไม้",
    "hos_guid": "{9D9C2CC2-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_plant_id": 8,
    "house_plant_name": "08 มะม่วงโชคอนันต์",
    "hos_guid": "{9D9C2DB2-F542-11DE-BFF4-00215E472B30}"
  }
]
```

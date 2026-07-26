# `stock_warehouse_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| warehouse_type_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_type_name | varchar(200) | YES | UNI | NULL |  |  |
| is_herb | char(1) | YES |  | NULL |  |  |
| is_medication | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_warehouse_type_name | warehouse_type_name | yes | 1 |
| PRIMARY | warehouse_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "warehouse_type_id": 1,
    "warehouse_type_name": "คลังเวชภัณฑ์ยา",
    "is_herb": null,
    "is_medication": null
  },
  {
    "warehouse_type_id": 2,
    "warehouse_type_name": "คลังเวชภัณฑ์ที่มิใช่ยา / วัสดุการแพทย์",
    "is_herb": null,
    "is_medication": null
  },
  {
    "warehouse_type_id": 3,
    "warehouse_type_name": "คลังอุปกรณ์/เครื่องมือแพทย์ และอะไหล่",
    "is_herb": null,
    "is_medication": null
  },
  {
    "warehouse_type_id": 4,
    "warehouse_type_name": "คลังห้องผ่าตัด / เวชภัณฑ์ปลอดเชื้อ",
    "is_herb": null,
    "is_medication": null
  },
  {
    "warehouse_type_id": 5,
    "warehouse_type_name": "คลังวัสดุวิทยาศาสตร์/ห้องปฏิบัติการ",
    "is_herb": null,
    "is_medication": null
  },
  {
    "warehouse_type_id": 6,
    "warehouse_type_name": "คลังรังสีวิทยา",
    "is_herb": null,
    "is_medication": null
  },
  {
    "warehouse_type_id": 7,
    "warehouse_type_name": "คลังโภชนาการ / วัตถุดิบอาหาร",
    "is_herb": null,
    "is_medication": null
  },
  {
    "warehouse_type_id": 8,
    "warehouse_type_name": "คลังผ้าลินิน / ซักฟอก",
    "is_herb": null,
    "is_medication": null
  }
]
```

# `emp_insignia_type_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_insignia_type_sub_id | int(11) | NO | PRI | 0 |  |  |
| emp_insignia_type_sub_name | varchar(200) | YES |  | NULL |  |  |
| emp_insignia_type_level_id | int(11) | YES |  | NULL |  |  |
| emp_insignia_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_insignia_type_sub_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_insignia_type_sub_id": 1,
    "emp_insignia_type_sub_name": "เครื่องราชอิสริยาภรณ์อันเป็นมงคลยิ่งราชมิตราภรณ์ (ร.ม.ภ.)",
    "emp_insignia_type_level_id": 5,
    "emp_insignia_type_id": 1
  },
  {
    "emp_insignia_type_sub_id": 2,
    "emp_insignia_type_sub_name": "เครื่องขัตติยราชอิสริยาภรณ์อันมีเกียรติคุณรุ่งเรืองยิ่งมหาจักรีบรมราชวงศ์ (ม.จ.ก.)",
    "emp_insignia_type_level_id": 5,
    "emp_insignia_type_id": 2
  },
  {
    "emp_insignia_type_sub_id": 3,
    "emp_insignia_type_sub_name": "เครื่องราชอิสริยาภรณ์อันเป็นโบราณมงคลนพรัตนราชวราภรณ์ (น.ร.)",
    "emp_insignia_type_level_id": 5,
    "emp_insignia_type_id": 3
  },
  {
    "emp_insignia_type_sub_id": 4,
    "emp_insignia_type_sub_name": "ปฐมจุลจอมเกล้าวิเศษ (ป.จ.ว.),ฝ่ายหน้า",
    "emp_insignia_type_level_id": 1,
    "emp_insignia_type_id": 4
  },
  {
    "emp_insignia_type_sub_id": 5,
    "emp_insignia_type_sub_name": "ปฐมจุลจอมเกล้า (ป.จ.),ฝ่ายหน้า",
    "emp_insignia_type_level_id": 1,
    "emp_insignia_type_id": 4
  },
  {
    "emp_insignia_type_sub_id": 6,
    "emp_insignia_type_sub_name": "ทุติยจุลจอมเกล้าวิเศษ (ท.จ.ว.),ฝ่ายหน้า",
    "emp_insignia_type_level_id": 2,
    "emp_insignia_type_id": 4
  },
  {
    "emp_insignia_type_sub_id": 7,
    "emp_insignia_type_sub_name": "ทุติยจุลจอมเกล้า (ท.จ.),ฝ่ายหน้า",
    "emp_insignia_type_level_id": 2,
    "emp_insignia_type_id": 4
  },
  {
    "emp_insignia_type_sub_id": 8,
    "emp_insignia_type_sub_name": "ตติยจุลจอมเกล้าวิเศษ (ต.จ.ว.),ฝ่ายหน้า",
    "emp_insignia_type_level_id": 3,
    "emp_insignia_type_id": 4
  }
]
```

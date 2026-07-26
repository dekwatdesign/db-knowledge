# `health_med_element_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_element_type_id | int(11) | NO | PRI | 0 |  |  |
| health_med_element_type_name | varchar(200) | YES | UNI | NULL |  |  |
| health_med_element_type_tname | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_element_type_name | health_med_element_type_name | yes | 1 |
| PRIMARY | health_med_element_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "health_med_element_type_id": 1,
    "health_med_element_type_name": "ธาตุดิน",
    "health_med_element_type_tname": "ปถวีธาตุ"
  },
  {
    "health_med_element_type_id": 2,
    "health_med_element_type_name": "ธาตุน้ำ",
    "health_med_element_type_tname": "อาโปธาตุ"
  },
  {
    "health_med_element_type_id": 3,
    "health_med_element_type_name": "ธาตุลม",
    "health_med_element_type_tname": "วาโยธาตุ"
  },
  {
    "health_med_element_type_id": 4,
    "health_med_element_type_name": "ธาตุไฟ",
    "health_med_element_type_tname": "เตโชธาตุ"
  }
]
```

# `hsk_cgi_type_di`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cgi_id | int(1) | NO | PRI | 0 |  |  |
| cgi_name | varchar(255) | YES |  | NULL |  |  |
| cgi_list | varchar(255) | YES |  | NULL |  |  |
| cgi_group | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | cgi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "cgi_id": 1,
    "cgi_name": "Distress (ความรู้สึกไม่สบายใจหรือทุกข์ใจ)",
    "cgi_list": "1.ไม่พบอาการของโรค",
    "cgi_group": "1"
  },
  {
    "cgi_id": 2,
    "cgi_name": "Distress (ความรู้สึกไม่สบายใจหรือทุกข์ใจ)",
    "cgi_list": "2.ไม่พบ",
    "cgi_group": "2"
  },
  {
    "cgi_id": 3,
    "cgi_name": "Distress (ความรู้สึกไม่สบายใจหรือทุกข์ใจ)",
    "cgi_list": "3.มีเล็กน้อย",
    "cgi_group": "2,3"
  },
  {
    "cgi_id": 4,
    "cgi_name": "Distress (ความรู้สึกไม่สบายใจหรือทุกข์ใจ)",
    "cgi_list": "4.มีชัดเจนแต่พอทนได้",
    "cgi_group": "4"
  },
  {
    "cgi_id": 5,
    "cgi_name": "Distress (ความรู้สึกไม่สบายใจหรือทุกข์ใจ)",
    "cgi_list": "5.มีมาก",
    "cgi_group": "4,5"
  },
  {
    "cgi_id": 6,
    "cgi_name": "Distress (ความรู้สึกไม่สบายใจหรือทุกข์ใจ)",
    "cgi_list": "6.มีมาก",
    "cgi_group": "6"
  },
  {
    "cgi_id": 7,
    "cgi_name": "Distress (ความรู้สึกไม่สบายใจหรือทุกข์ใจ)",
    "cgi_list": "7.มีมาก",
    "cgi_group": "6,7"
  }
]
```

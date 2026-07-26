# `er_ais85_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "code": 1,
    "name": "Minor (เล็กน้อย)"
  },
  {
    "code": 2,
    "name": "Moderate (ปานกลาง)"
  },
  {
    "code": 3,
    "name": "Serious : not life threatening (มากแต่ไม่คุกคามต่อชีวิต)"
  },
  {
    "code": 4,
    "name": "Severe : life threatening (มากและคุกคามต่อชีวิต)"
  },
  {
    "code": 5,
    "name": "Critical : survival uncertain (วิกฤต, ไม่แน่ใจในโอกาสรอดชีวิต)"
  },
  {
    "code": 6,
    "name": "Maxinum injury (รุนแรงที่สุด ส่วนใหญ่ไม่รอดชีวิต)"
  },
  {
    "code": 9,
    "name": "ไม่ทราบว่ามีการบาดเจ็บหรือไม่"
  }
]
```

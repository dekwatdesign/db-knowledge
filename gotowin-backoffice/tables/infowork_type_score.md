# `infowork_type_score`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TYPE_SCORE_ID | int | NO | PRI | NULL | auto_increment |  |
| TYPE_SCORE_NAME | varchar(600) | YES |  | NULL |  |  |
| ACTIVE | enum('True','Fales') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TYPE_SCORE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "TYPE_SCORE_ID": 1,
    "TYPE_SCORE_NAME": "เครื่องบ่งชี้พฤติกรรมสมรรถนะ \"การมุ่งผลสัมฤทธิ์\"",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:58:51",
    "created_at": "2020-09-28 14:13:26"
  },
  {
    "TYPE_SCORE_ID": 2,
    "TYPE_SCORE_NAME": "เครื่องบ่งชี้พฤติกรรมสมรรถนะ \"บริการที่ดี\"",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 15:00:04",
    "created_at": "2020-09-28 14:13:30"
  },
  {
    "TYPE_SCORE_ID": 3,
    "TYPE_SCORE_NAME": "เครื่องบ่งชี้พฤติกรรมสมรรถนะ \"การสั่งสมความเชี่ยวชาญในงานอาชีพ\"",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:32:01",
    "created_at": "2020-09-28 14:30:38"
  },
  {
    "TYPE_SCORE_ID": 4,
    "TYPE_SCORE_NAME": "เครื่องบ่งชี้พฤติกรรมสมรรถนะ \"การยึดมั่นในความถูกต้องชอบธรรมและจริยธรรม\"",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:33:31",
    "created_at": "2020-09-28 14:33:31"
  },
  {
    "TYPE_SCORE_ID": 5,
    "TYPE_SCORE_NAME": "เครื่องบ่งชี้พฤติกรรมสมรรถนะ \"การทำงานเป็นทีม\"",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:34:03",
    "created_at": "2020-09-28 14:34:03"
  }
]
```

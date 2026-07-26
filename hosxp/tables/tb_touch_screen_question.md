# `tb_touch_screen_question`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_touch_screen_question_id | int(11) | NO | PRI | 0 |  |  |
| tb_touch_screen_question_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_touch_screen_question_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "tb_touch_screen_question_id": 1,
    "tb_touch_screen_question_name": "ท่านมีอาการไอติดต่อกันเกิน 2 สัปดาห์หรือไม่",
    "hos_guid": null
  },
  {
    "tb_touch_screen_question_id": 2,
    "tb_touch_screen_question_name": "ท่านมีอาการไข้ติดต่อกันนาน 1 เดือนหรือไม่",
    "hos_guid": null
  },
  {
    "tb_touch_screen_question_id": 3,
    "tb_touch_screen_question_name": "ท่านมีน้ำหนักลดเกิด 5% ของน้ำหนักตัวภายใน 1 เดือนหรือไม่",
    "hos_guid": null
  },
  {
    "tb_touch_screen_question_id": 4,
    "tb_touch_screen_question_name": "ท่านมีเหงื่อออกผิดปกติตอนกลางคืนหรือไม่",
    "hos_guid": null
  },
  {
    "tb_touch_screen_question_id": 5,
    "tb_touch_screen_question_name": "ท่านมีต่อมน้ำเหลืองที่คอโตเกิน 2 ซม. หรือไม่",
    "hos_guid": null
  }
]
```

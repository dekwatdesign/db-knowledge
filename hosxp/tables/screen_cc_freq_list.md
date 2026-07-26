# `screen_cc_freq_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| screen_cc_freq_list_id | int(11) | NO | PRI | 0 |  |  |
| screen_cc_freq_list_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_screen_cc_freq_list_name | screen_cc_freq_list_name | yes | 1 |
| PRIMARY | screen_cc_freq_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "screen_cc_freq_list_id": 9,
    "screen_cc_freq_list_name": "ไข้หวัด"
  },
  {
    "screen_cc_freq_list_id": 1,
    "screen_cc_freq_list_name": "ไข้"
  },
  {
    "screen_cc_freq_list_id": 2,
    "screen_cc_freq_list_name": "ชัก"
  },
  {
    "screen_cc_freq_list_id": 6,
    "screen_cc_freq_list_name": "ซีด"
  },
  {
    "screen_cc_freq_list_id": 5,
    "screen_cc_freq_list_name": "ตัวเหลือง"
  },
  {
    "screen_cc_freq_list_id": 8,
    "screen_cc_freq_list_name": "ท้องเสีย"
  },
  {
    "screen_cc_freq_list_id": 10,
    "screen_cc_freq_list_name": "ปวดกล้ามเนื้อ"
  },
  {
    "screen_cc_freq_list_id": 7,
    "screen_cc_freq_list_name": "ปวดท้อง"
  }
]
```

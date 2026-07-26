# `rcpt_print_img_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_print_img_type_id | int(11) | NO | PRI | 0 |  |  |
| rcpt_print_img_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rcpt_print_img_type_name | rcpt_print_img_type_name | yes | 1 |
| PRIMARY | rcpt_print_img_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "rcpt_print_img_type_id": 1,
    "rcpt_print_img_type_name": "ใบเสร็จรับเงิน"
  },
  {
    "rcpt_print_img_type_id": 2,
    "rcpt_print_img_type_name": "ลายเซ็นต์"
  },
  {
    "rcpt_print_img_type_id": 3,
    "rcpt_print_img_type_name": "รูปผู้ทำรายการ"
  },
  {
    "rcpt_print_img_type_id": 4,
    "rcpt_print_img_type_name": "ใบแจ้งหนี้"
  }
]
```

# `opd_kiosk_error_msg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_kiosk_error_msg_id | int(11) | NO | PRI | 0 |  |  |
| error_rtf_text | longtext | YES |  | NULL |  |  |
| error_code | varchar(25) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_error_code | error_code | yes | 1 |
| PRIMARY | opd_kiosk_error_msg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "opd_kiosk_error_msg_id": 1,
    "error_rtf_text": "\r\n",
    "error_code": "PTTYPE_ERROR"
  }
]
```

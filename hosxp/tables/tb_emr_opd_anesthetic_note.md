# `tb_emr_opd_anesthetic_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(15) | NO | PRI |  |  |  |
| loginname | varchar(50) | NO | PRI |  |  |  |
| opd_anesthetic_note_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| opd_anesthetic_note_user | varchar(200) | YES |  | NULL |  |  |
| opd_anesthetic_note_text | text | YES |  | NULL |  |  |
| opd_anesthetic_note_delete_user | varchar(50) | YES |  | NULL |  |  |
| opd_anesthetic_note_delete_datetime | datetime | YES |  | NULL |  |  |
| opd_anesthetic_note_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |
| PRIMARY | loginname | yes | 2 |
| PRIMARY | opd_anesthetic_note_datetime | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "vn": "590518160447",
    "loginname": "bms",
    "opd_anesthetic_note_datetime": "2019-05-27 11:52:09",
    "hn": "530161154",
    "opd_anesthetic_note_user": "BMSHOSxP",
    "opd_anesthetic_note_text": "1dfsdfdsfd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4<br />2dsfsdf&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1",
    "opd_anesthetic_note_delete_user": "",
    "opd_anesthetic_note_delete_datetime": null,
    "opd_anesthetic_note_status": "N"
  },
  {
    "vn": "590518160447",
    "loginname": "bms",
    "opd_anesthetic_note_datetime": "2019-05-27 12:04:31",
    "hn": "530161154",
    "opd_anesthetic_note_user": "BMSHOSxP",
    "opd_anesthetic_note_text": "",
    "opd_anesthetic_note_delete_user": "",
    "opd_anesthetic_note_delete_datetime": null,
    "opd_anesthetic_note_status": "Y"
  }
]
```

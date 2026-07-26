# `html_store`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| html_store_id | int(11) | NO | PRI | 0 |  |  |
| html_store_key | varchar(200) | YES | UNI | NULL |  |  |
| html_text | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_html_store_key | html_store_key | yes | 1 |
| PRIMARY | html_store_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "html_store_id": 11,
    "html_store_key": "ehp_announce",
    "html_text": "<div align=\"center\"><font size=\"5\" color=\"0000FF\"><b><br></b></font></div><div align=\"center\"><font size=\"5\" color=\"0000FF\"><b>Excellent Health Platform</b></font></div><div align=\"center\"><font size=\"5\" color=\"0000FF\"><b><br></b></font></div><div align=\"center\"><font size=\"5\" color=\"0000FF\"><b><br></b></font></div><div align=\"center\"><font size=\"5\" color=\"0000FF\"><font size=\"4\" color=\"000000\"><font size=\"5\"><b>ระบบบริหารจัดการให้บริการดูแลสุขภาพ</b></font></font><b><font color=\"000000\"> ร้านขายยา/คลินิก/รพ.สต./รพช.</font><br></b></font></div>\r\n"
  }
]
```

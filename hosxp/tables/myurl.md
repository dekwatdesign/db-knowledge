# `myurl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| url_id | varchar(45) | YES |  | NULL |  |  |
| url_name | varchar(500) | YES |  | NULL |  |  |
| url_value | varchar(500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "url_id": "01",
    "url_name": "EKG 12 Leads",
    "url_value": "http://refer.lph.go.th/consult/EKG.aspx"
  },
  {
    "url_id": "02",
    "url_name": "Lab Result",
    "url_value": "http://refer.lph.go.th/lab/"
  },
  {
    "url_id": "99",
    "url_name": "EKG 12 Leads",
    "url_value": "http://refer.lph.go.th/consult/EKG.aspx"
  },
  {
    "url_id": "99",
    "url_name": "Lab Result",
    "url_value": "http://refer.lph.go.th/lab/"
  }
]
```

# `iclaim_ipd_doctype_api_path`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_ipd_doctype_api_path_id | int(11) | NO | PRI | 0 |  |  |
| iclaim_ipd_doctype_id | int(11) | YES | MUL | NULL |  |  |
| iclaim_ipd_api_path | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reficlaim_ipd_doctype2 | iclaim_ipd_doctype_id | no | 1 |
| PRIMARY | iclaim_ipd_doctype_api_path_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "iclaim_ipd_doctype_api_path_id": 1,
    "iclaim_ipd_doctype_id": 31,
    "iclaim_ipd_api_path": "Attach-doc-list"
  },
  {
    "iclaim_ipd_doctype_api_path_id": 2,
    "iclaim_ipd_doctype_id": 32,
    "iclaim_ipd_api_path": "Attach-doc-list"
  },
  {
    "iclaim_ipd_doctype_api_path_id": 3,
    "iclaim_ipd_doctype_id": 33,
    "iclaim_ipd_api_path": "Attach-doc-list"
  },
  {
    "iclaim_ipd_doctype_api_path_id": 8,
    "iclaim_ipd_doctype_id": 36,
    "iclaim_ipd_api_path": "Attach-doc-list"
  },
  {
    "iclaim_ipd_doctype_api_path_id": 10,
    "iclaim_ipd_doctype_id": 37,
    "iclaim_ipd_api_path": "Attach-doc-list"
  },
  {
    "iclaim_ipd_doctype_api_path_id": 11,
    "iclaim_ipd_doctype_id": 38,
    "iclaim_ipd_api_path": "Attach-doc-list"
  },
  {
    "iclaim_ipd_doctype_api_path_id": 12,
    "iclaim_ipd_doctype_id": 39,
    "iclaim_ipd_api_path": "Discharge"
  },
  {
    "iclaim_ipd_doctype_api_path_id": 13,
    "iclaim_ipd_doctype_id": 40,
    "iclaim_ipd_api_path": "Attach-doc-list"
  }
]
```

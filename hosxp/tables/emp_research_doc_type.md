# `emp_research_doc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_research_doc_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_research_doc_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_research_doc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_research_doc_type_id": 1,
    "emp_research_doc_type_name": "ตัวจริง"
  },
  {
    "emp_research_doc_type_id": 2,
    "emp_research_doc_type_name": "สำเนา"
  }
]
```

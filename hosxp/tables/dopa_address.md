# `dopa_address`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| addressid | bigint(20) | NO | PRI | 0 |  |  |
| name | varchar(50) | YES | MUL | NULL |  |  |
| chwpart | char(2) | YES | MUL | NULL |  |  |
| amppart | char(4) | YES | MUL | NULL |  |  |
| tmbpart | char(6) | YES | MUL | NULL |  |  |
| codetype | char(1) | YES | MUL | NULL |  |  |
| pocode | varchar(5) | YES |  | NULL |  |  |
| full_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dopa_address_amppart_chwpart_codetype_idx1 | amppart | no | 1 |
| ix_dopa_address_amppart_chwpart_codetype_idx1 | chwpart | no | 2 |
| ix_dopa_address_amppart_chwpart_codetype_idx1 | codetype | no | 3 |
| ix_dopa_address_amppart_chwpart_codetype_tmbpart_idx6 | amppart | no | 1 |
| ix_dopa_address_amppart_chwpart_codetype_tmbpart_idx6 | chwpart | no | 2 |
| ix_dopa_address_amppart_chwpart_codetype_tmbpart_idx6 | codetype | no | 3 |
| ix_dopa_address_amppart_chwpart_codetype_tmbpart_idx6 | tmbpart | no | 4 |
| ix_dopa_address_amppart_idx | amppart | no | 1 |
| ix_dopa_address_chwpart_codetype_idx2 | chwpart | no | 1 |
| ix_dopa_address_chwpart_codetype_idx2 | codetype | no | 2 |
| ix_dopa_address_chwpart_idx | chwpart | no | 1 |
| ix_dopa_address_codetype_idx | codetype | no | 1 |
| ix_dopa_address_hos_guid_ext_idx | hos_guid_ext | no | 1 |
| ix_dopa_address_hos_guid_idx | hos_guid | no | 1 |
| ix_dopa_address_name_idx | name | no | 1 |
| ix_dopa_address_tmbpart_idx | tmbpart | no | 1 |
| PRIMARY | addressid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "addressid": 8447,
    "name": "กรุงเทพมหานคร",
    "chwpart": "10",
    "amppart": "00",
    "tmbpart": "00",
    "codetype": null,
    "pocode": null,
    "full_name": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": 8448,
    "name": "เขตพระนคร",
    "chwpart": "10",
    "amppart": "1001",
    "tmbpart": "00",
    "codetype": null,
    "pocode": null,
    "full_name": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": 8449,
    "name": "พระบรมมหาราชวัง",
    "chwpart": "10",
    "amppart": "1001",
    "tmbpart": "100101",
    "codetype": null,
    "pocode": null,
    "full_name": "ต.พระบรมมหาราชวัง อ.เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": 8450,
    "name": "วังบูรพาภิรมย์",
    "chwpart": "10",
    "amppart": "1001",
    "tmbpart": "100102",
    "codetype": null,
    "pocode": null,
    "full_name": "ต.วังบูรพาภิรมย์ อ.เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": 8451,
    "name": "วัดราชบพิธ",
    "chwpart": "10",
    "amppart": "1001",
    "tmbpart": "100103",
    "codetype": null,
    "pocode": null,
    "full_name": "ต.วัดราชบพิธ อ.เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": 8452,
    "name": "สำราญราษฎร์",
    "chwpart": "10",
    "amppart": "1001",
    "tmbpart": "100104",
    "codetype": null,
    "pocode": null,
    "full_name": "ต.สำราญราษฎร์ อ.เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": 8453,
    "name": "ศาลเจ้าพ่อเสือ",
    "chwpart": "10",
    "amppart": "1001",
    "tmbpart": "100105",
    "codetype": null,
    "pocode": null,
    "full_name": "ต.ศาลเจ้าพ่อเสือ อ.เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": 8454,
    "name": "เสาชิงช้า",
    "chwpart": "10",
    "amppart": "1001",
    "tmbpart": "100106",
    "codetype": null,
    "pocode": null,
    "full_name": "ต.เสาชิงช้า อ.เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```

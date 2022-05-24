using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace QuoteAPI.DAL
{
    public partial class quote_databaseContext : DbContext
    {
        public quote_databaseContext()
        {
        }

        public quote_databaseContext(DbContextOptions<quote_databaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Categorypostion> Categorypostions { get; set; } = null!;
        public virtual DbSet<Margin> Margins { get; set; } = null!;
        public virtual DbSet<Project> Projects { get; set; } = null!;
        public virtual DbSet<Quotedatum> Quotedata { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=blq3fzst5xjszsncpo7q-mysql.services.clever-cloud.com;user=uo7dtu06efduvrgl;password=P9jr9QPCOGBDez2LH6F1;database=blq3fzst5xjszsncpo7q", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.15-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8_general_ci")
                .HasCharSet("utf8");

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("category");

                entity.HasCharSet("utf8mb4")
                    .UseCollation("utf8mb4_0900_ai_ci");

                entity.HasIndex(e => e.ProjectId, "fk_project_id_idx");

                entity.Property(e => e.Id)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("id");

                entity.Property(e => e.Category1)
                    .HasMaxLength(150)
                    .HasColumnName("category");

                entity.Property(e => e.CategoryId)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("categoryId");

                entity.Property(e => e.CreatedOn)
                    .HasColumnType("datetime")
                    .HasColumnName("createdOn");

                entity.Property(e => e.ProjectId)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("projectId");

                entity.Property(e => e.UpdatedOn)
                    .HasColumnType("datetime")
                    .HasColumnName("updatedOn");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Categories)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_project_id_cat");
            });

            modelBuilder.Entity<Categorypostion>(entity =>
            {
                entity.ToTable("categorypostion");

                entity.HasIndex(e => e.CategoryId, "fk_category_id_idx");

                entity.Property(e => e.Id)
                    .HasColumnType("bigint(20)")
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.CategoryId)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("categoryId");

                entity.Property(e => e.CategoryPosition)
                    .HasPrecision(10)
                    .HasColumnName("categoryPosition");

                entity.Property(e => e.CreatedOn)
                    .HasColumnType("datetime")
                    .HasColumnName("createdOn");

                entity.Property(e => e.UpdatedOn)
                    .HasColumnType("datetime")
                    .HasColumnName("updatedOn");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Categorypostions)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_category_id");
            });

            modelBuilder.Entity<Margin>(entity =>
            {
                entity.ToTable("margin");

                entity.HasIndex(e => e.ProjectId, "fk_project_id_idx");

                entity.Property(e => e.Id)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("id");

                entity.Property(e => e.CreatedOn)
                    .HasColumnType("datetime")
                    .HasColumnName("createdOn");

                entity.Property(e => e.MarginAmount)
                    .HasPrecision(10)
                    .HasColumnName("marginAmount");

                entity.Property(e => e.MarginLineItem)
                    .HasMaxLength(150)
                    .HasColumnName("marginLineItem");

                entity.Property(e => e.ProjectId)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("projectId");

                entity.Property(e => e.UpdatedOn)
                    .HasColumnType("datetime")
                    .HasColumnName("updatedOn");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Margins)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_project_id");
            });

            modelBuilder.Entity<Project>(entity =>
            {
                entity.ToTable("project");

                entity.HasCharSet("utf8mb4")
                    .UseCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Id)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(250)
                    .HasColumnName("name")
                    .UseCollation("utf8_general_ci")
                    .HasCharSet("utf8");
            });

            modelBuilder.Entity<Quotedatum>(entity =>
            {
                entity.ToTable("quotedata");

                entity.HasCharSet("utf8mb4")
                    .UseCollation("utf8mb4_0900_ai_ci");

                entity.HasIndex(e => e.CategoryPositionId, "fk_cat_pos_quote_id_idx");

                entity.HasIndex(e => e.MarginId, "fk_margin_quote_id_idx");

                entity.HasIndex(e => e.ProjectId, "fk_project_quote_id_idx");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.CategoryPositionId)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("categoryPositionId");

                entity.Property(e => e.CreatedOn)
                    .HasColumnType("datetime")
                    .HasColumnName("createdOn");

                entity.Property(e => e.ItemDescription)
                    .HasMaxLength(145)
                    .HasColumnName("itemDescription");

                entity.Property(e => e.MarginAmount)
                    .HasPrecision(3, 2)
                    .HasColumnName("marginAmount");

                entity.Property(e => e.MarginId)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("marginId");

                entity.Property(e => e.MarginLineItem)
                    .HasMaxLength(145)
                    .HasColumnName("marginLineItem");

                entity.Property(e => e.PricePerQuantity)
                    .HasPrecision(10)
                    .HasColumnName("pricePerQuantity");

                entity.Property(e => e.ProjectId)
                    .HasColumnType("bigint(20)")
                    .HasColumnName("projectId");

                entity.Property(e => e.Quantity)
                    .HasPrecision(10)
                    .HasColumnName("quantity");

                entity.Property(e => e.Uom)
                    .HasMaxLength(145)
                    .HasColumnName("uom");

                entity.Property(e => e.UpdatedOn)
                    .HasColumnType("datetime")
                    .HasColumnName("updatedOn");

                entity.Property(e => e.Waste)
                    .HasPrecision(10)
                    .HasColumnName("waste");

                entity.HasOne(d => d.CategoryPosition)
                    .WithMany(p => p.Quotedata)
                    .HasForeignKey(d => d.CategoryPositionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_cat_pos_quote_id");

                entity.HasOne(d => d.Margin)
                    .WithMany(p => p.Quotedata)
                    .HasForeignKey(d => d.MarginId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_margin_quote_id");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Quotedata)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_project_quote_id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

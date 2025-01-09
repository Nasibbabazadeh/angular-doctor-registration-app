deletePaymentById(recId: number) {
    this.isLoading = true;
    this.service.deletePrescriptionPaymentById(this.formId, recId).subscribe({
      next: () => {
        tap(() => console.log('Delete request successful')),
          delay(3000),
          tap(() => this.fillPrescriptionPayments()),
          finalize(() => {
            this.isLoading = false;
          })
      }
    })
  }
